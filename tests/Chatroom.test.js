import Chatroom from '../src/objects/Chatroom'

test('test constructor', () => {
    const chatroom = new Chatroom("test")
    expect(chatroom.name).toBe("test")
})