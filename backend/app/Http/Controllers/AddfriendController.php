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
    /* Gets all users except signed in user */
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
    /* gets signed in user friendlist */
    public function friendList()
    {
        if (auth()->user()) {
            $friends = Addfriend::where('sender_id', auth()->id())->orWhere('receiver_id', auth()->id())->get();
            $acceptedfriends = $friends->where('status', 1);
            foreach ($acceptedfriends as $friend) {
                if (auth()->id() == $friend->sender_id) {
                    $friend->userData = User::where('id', $friend->receiver_id)->get();
                } else {
                    $friend->userData = User::where('id', $friend->sender_id)->get();
                }
            }

            return response()->json([
                'friendlist' =>  $acceptedfriends
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
    /* on sent friendrequest, status 0 is default,
    meaning not friends yet */
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
    /* prints friendrequests for signed in user */
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
    /* when user accepts friendrequest, status is changed to 1 */
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
    /* be able to delete friend, but for now it's
    only called when friendrequest is declined */
    public function destroy($id)
    {

        if (Addfriend::where('id', $id)->delete()) {
            return response()->json([
                'message' => 'Friendrequest removed'
            ]);
        } else {
            return response()->json([
                'message' => 'Failed to remove FR'
            ]);
        }
    }
}
