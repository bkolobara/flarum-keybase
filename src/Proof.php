<?php

namespace Bkolobara\Keybase;

use Flarum\Database\AbstractModel;

/**
 * @property int $id
 * @property int $user_id
 * @property bool $active
 * @property string $sig_hash
 * @property string $kb_username
 * @property string $kb_ua
 */
class Proof extends AbstractModel
{
    protected $table = 'keybase_proofs';

    public static function create($user, $kbUsername, $sigHash, $kbUa)
    {
        $proof = new static;
        $proof->user_id = $user->id;
        $proof->active = false;
        $proof->kb_username = $kbUsername;
        $proof->sig_hash = $sigHash;
        $proof->kb_ua = $kbUa;

        return $proof;
    }

    public function activate()
    {
        $this->active = true;
        $this->save();
    }

    public function deactivate()
    {
        $this->active = false;
        $this->save();
    }

    public function user()
    {
        return $this->belongsTo('Flarum\User\User');
    }
}
