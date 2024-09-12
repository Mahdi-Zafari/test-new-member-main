<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return MessageResource::Collection(Message::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        return new MessageResource(Message::create($request->all()));
    }

    public function update(Request $request, Message $message)
    {
        $message->update($request->all());
        return new MessageResource($message);
    }

    public function destroy(Message $message)
    {
        $message->delete();
        return response()->json(null, 204);
    }
    public function getMessages(Request $request)
    {
        $messages = Message::where('sender_id', auth()->id())
            ->where('receiver_id', $request->receiver_id)
            ->orWhere('sender_id', $request->receiver_id)
            ->where('receiver_id', auth()->id())
            ->get();
        return response()->json(MessageResource::collection($messages));
    }
    public function sendMessage(Request $request)
    {
        $validatedData = $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'sender_id' => 'required|exists:users,id',
            'body' => 'required|string',
        ]);

        $message = Message::create([
            'receiver_id' => $validatedData['receiver_id'],
            'sender_id' =>auth()->id(),
            'body' => $validatedData['body'],
        ]);
        broadcast(new MessageSent($message))->toOthers();
        return response()->json(new MessageResource($message), 201);
    }
}
