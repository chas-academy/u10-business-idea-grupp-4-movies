<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addfriend extends Model
{
    use HasFactory;

    protected $table = 'addfriends';

    protected $fillable = [
        'sender_id',
        'receiver_id',
    ];
}
