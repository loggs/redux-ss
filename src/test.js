import { socketMiddleware, SEND_SOCKET } from "./";

describe("SEND_SOCKET", () => {
  it("Does it properly manage string", () => {
    expect(SEND_SOCKET("test") === "socket/test").toBeTruthy();
  });
});
