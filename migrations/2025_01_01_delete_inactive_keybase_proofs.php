<?php

use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // Delete all inactive proofs from the database
        $schema->getConnection()
            ->table('keybase_proofs')
            ->where('active', false)
            ->delete();
    },
    'down' => function (Builder $schema) {
        // No way to restore deleted inactive proofs
    }
];
