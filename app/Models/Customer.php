<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class customer extends Model
{
    use HasFactory;
    protected $table = 'customers';
    protected $fillable = ['name', 'email', 'phone', 'address'];
}