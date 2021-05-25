<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Swipe extends Model
{
    use HasFactory;

    protected $table = 'swipes';

    protected $fillable = [
        'user_id',
        'movies_id',
    ];
}