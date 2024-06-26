<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('psx_backend_settings', function (Blueprint $table) {
            $table->after("opacity", function ($table){
                $table->boolean('is_google_map')->default(1)->nullable();
                $table->boolean('is_open_street_map')->default(0)->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('psx_backend_settings', function (Blueprint $table) {
            $table->dropColumn([
                'is_open_street_map',
                'is_google_map',
            ]);
        });
    }
};
