import * as date from "./date"


describe("date", () => {
it("returns timestamp" , () =>{
  jest.spyOn(date, "getTimeStamp").mockReturnValue("2024-04-18T11:45:51.173Z")
  const timestamp = date.getTimeStamp()
    expect(timestamp).toEqual("2024-04-18T11:45:51.173Z");
});
});