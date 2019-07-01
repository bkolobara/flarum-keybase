<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable('keybase_proofs', function (Blueprint $table) {
    $table->increments('id');
    $table->integer('user_id')->unsigned();
    $table->boolean('active');

    $table->string('kb_username');
    $table->string('sig_hash');
    $table->string('kb_ua');

    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
});