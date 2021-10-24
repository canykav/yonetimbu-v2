<?php

namespace App\Jobs;

use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MonthlyDebitting implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        $sites = Site::whereNull('sites.deleted_at')->whereNull('sites.archived_at')->get();
        foreach($sites as $site) {
            $properties = Site::find($site->id)->getProperties();

            DB::beginTransaction();
            $isReady = true;
            foreach($properties as $property) {
                if(empty($property['householder']) && empty($property['tenant'])) {
                    $isReady = false;
                    Log::channel('monthlydebit')->debug('#' .  $site->id . ' ' . iconv('latin5','utf-8',strftime('%B')) . ': failed');
                    break;
                }
            }
            if($isReady) {
                foreach($properties as $property) {
                    Transaction::create([
                        'occupants_id' => ($property['tenant']) ? $property['tenant']['id'] : $property['householder']['id'],
                        'description' => date('Y').' '.iconv('latin5','utf-8',strftime('%B')).' Aidatı',
                        'transaction_type' => 'debit',
                        'date' => date('Y-m-01'),
                        'due_date' => date('Y-m-t'),
                        'amount' => $property['type']['fee_amount'],
                        'status' => 'pending',
                        'sites_id' => $site->id,
                    ]);
                }
            }

            DB::commit();
        }
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
    }
}
