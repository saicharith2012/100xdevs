# Notes

## Websockets

![alt text](image.png)

**Persistence** - the connection b/w the client
and the server remains open, such that multiple requests can be
sent during a single TCP connection.
(Once the connection is made, it stays there,
allowing to send multiple requests over that connection)

HTTP request is not the same with persistence becuz, there's a 3-way handshake
(syn, syn-ack, ack) happening b/w the client and server,
everytime a request needs to be sent.
(and the 3-way handshake closes when a response is returned.)
(The HTTP protocol is written in such a way that, a 3-way handshake happens
everytime a request is made.)

![alt text](image-1.png)

Hence, we use protocols like Websockets and WebRTC for persistent connections
b/w two parties.

There is a 3-way handshake in case of websockets too, but the connection with
the backend remains persistent, until the client is closed or server crashes.
In this case:

- The data can be sent incrementally over and over.

![alt text](image-2.png)

**Full-Duplex Communication Channel** - messages can be sent both ways
(both the client and server in the form of request and response pairs) multiple times over this single TCP connection.

**TCP Connection** - (Transmission Control Protocol) - Websockets and HTTP servers under the hood use TCP protocol.

- WebRTC uses both UDP and TCP protocols.

**Websockets** are mainly used for Real time communication.

- In applications that need real time updates (sometimes in milliseconds) on the client side,
  data fetching and updation could not be possible by just sending the HTTP requests frequently.

- In this case a websocket server can be established, which serves the real time updates continuously.

![alt text](image-3.png)

![alt text](image-4.png)

- In case of a chat application in real time, without a persistent connection and solely with user driven events,
  its difficult to pass on a message sent by one user to the user one the other side, since there is no two-way communication.
  (For suppose, when a user sends a message through a HTTP request, its not received by the other user due to absence of
  tcp connection b/w the server and that user during this time, since the server itself can't push the message in this case.)

![alt text](image-5.png)

- Whereas in case of a websocket server, due to persistent connection of users with the server,
  both user events and server-side events can be made, hence making it possible for the other side user to receive the message.
  (server triggers an event when a message needs to be sent from one user to the other.)

![alt text](image-6.png)

- Hence, in presence of a websocket server, while multiple users are connected to it,
  a message can be sent by any of them to the server and also among each other.

### Can this real-time communication be set up using solely a HTTP server?

Its possible with **Polling**, where the end users
frequently send requests to the server in short bursts of time
in order check if any messages are sent to them by the other users.
(in absence of persistent connection with server and server-side triggered events)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-10.png)

But the disadvantages in this case are:

1. **Inefficient Resource Usage** - Long polling keeps sending repeated HTTP requests and holds them open, wasting server memory, threads, and network bandwidth (resource intensive).

2. **High Latency Gaps** - There's always a delay between responses and new requests, making it unsuitable for true real-time use cases.

3. **Poor Scalability** - Managing thousands of open HTTP connections becomes a bottleneck, making it hard to scale across users or servers.

![alt text](image-9.png)

Hence it is best to use **web sockets**, since they maintain a single, persistent, bi-directional connection that enables low-latency, real-time data flow with minimal overhead
especially in a use case that needs frequent updates in real time.

- But, the fact is scaling a websocket server is even harder.

![alt text](image-11.png)

- There is also a way called **Long Polling** where the client sends the request that remains open, and whenever the event happens, the message is sent as a response.

### WebRTC vs Websockrts

- WebRTC that supports UDP is generally used in cases where even lossy transmission is acceptable (to keep things flowing even if a packet drops inbetween) in order to provide real time experience.

Whereas

- Websockets over a TCP connection keeps track of each and every activity or message. (Data integrity matters)

## Scaling Backend servers

In real world, there won't be only one instance of server running in the backend, instead there are
multitude of servers (sometimes in 1000s during peak times) that accept the requests. These servers
are scaled according to the incoming traffic.

HTTP servers are **stateless** and there state is generally stored in the DB.

Hence scaling up and down the servers in case of HTTP is easier,
since there is no loss of state when a server instance is killed.

![alt text](image-12.png)

Therefore, in this case, the database is the commonplace where all the data is stored.
And all the servers reach out only to the database to fetch data.

## Scaling Websocket servers

But in case of websocket servers, most of the times they are **Stateful** i.e., servers contain the data
of a particular communication channel, such that if downscaled, the data in the servers killed will be lost.

We also **can't** make the web socket servers stateless, because we can't store the sockets that contain the data inside a database.
That is because, the sockets are a part of the connection b/w the client and the server rather and even if it is stored in a database by somehow serializing it
for later use, the connection it is a part of might not exist anymore.

![alt text](image-13.png)

----> Not possible

Hence for two client to be in a communication channel, they need to be connected to the same server.
This type of connection is called **Sticky Connection**.

![alt text](image-14.png)

In case of chat rooms, generally users of one room are connected to the same server.

That **doesn't mean** people from same room **can't** be connected to different servers. It is carried out
by scaling that servers.

During scaling, the rooms from one server are drained and introduced into another server,
thus distributing the traffic during upscaling and draining servers completely to kill them during downscaling.

But, even then, the web socket servers can't scale beyond a point on large scale traffic in this Sticky architecture
(like a million users in the same chat room where the traffic is distributed to multiple web socket servers).
Because a user connected to a particular server cannot communicate with a user connected to another server.
In that case, the websocket servers should also communicate b/w each other. This architecture can be accomplished using **Pub Sub**.

![alt text](image-15.png)

In case of a single chat room traffic distributed over multiple servers, the message sent by a user to one server is broadcasted throughout that server but it is also relayed to the Pub Sub,
And the Pub Sub will then relay the message to remaining servers, thus broadcasting the message throughout the chat room.
So, the Pub Sub also needs to be scaled in order to handle messages from all the servers. In this way, the outgoing requests are distributed throughout the servers.

In case of a chat application, the old messages are stored and fetched through a HTTP server and the latest messages in real time are sent using Websockets.

![alt text](image-16.png)
