<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Addfriend;
use Illuminate\Http\Request;
use App\Models\User;

class AddfriendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (auth()->user()) {
            $users = User::where('id', '!=', auth()->id())->get();
            if ($users) {
                return response()->json([
                    'success' => true,
                    'users' => $users
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'users' => 'sorry, no users where found'
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'users' => 'you have to be signed in'
            ]);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function friendList()
    {
        if (auth()->user()) {
            $friends = Addfriend::where('sender_id', auth()->id())->orWhere('receiver_id', auth()->id())->where('status', 1)->get();
            foreach ($friends as $friend) {
                $friend->userData = User::where('id', $friend->sender_id)->get();
            }
            return response()->json([
                'friendlist' =>  $friends
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $newFriend = Addfriend::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $id
        ]);

        if ($newFriend) {
            return response()->json([
                'success' => true,
                'message' => 'friend request sent'
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'not sent'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\addfriend  $addfriend
     * @return \Illuminate\Http\Response
     */
    public function show(addfriend $addfriend)
    {
        /* sender name nestled in array called name */
        $friendRequests = Addfriend::where('receiver_id', auth()->id())->where('status', 0)->get();
        foreach ($friendRequests as $request) {
            $request->name = User::where('id', $request->sender_id)->get('name');
        }
        if ($friendRequests) {
            return response()->json([
                'friendRequest' => $friendRequests
            ]);
        } else {
            return response()->json([
                'message' => 'no pending requests'
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\addfriend  $addfriend
     * @return \Illuminate\Http\Response
     */
    public function edit(addfriend $addfriend)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\addfriend  $addfriend
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, addfriend $addfriend, $id)
    {
        $friendRequest = Addfriend::where('id', $id)->first();
        $friendRequest->status = '1';
        
        if ($friendRequest->save()) {
            return response()->json([
                'message' => 'Friendrequest accepted'
            ]);
        } else {
            return response()->json([
                'message' => 'Failed to add friend'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\addfriend  $addfriend
     * @return \Illuminate\Http\Response
     */
    public function destroy(addfriend $addfriend)
    {
        //
    }
}