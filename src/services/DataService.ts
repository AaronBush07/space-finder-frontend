import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Paris",
      name: "Best Location",
      spaceId: "123",
    });
    result.push({
      location: "London",
      name: "Good Location",
      spaceId: "12",
    });
    result.push({
      location: "Sydney",
      name: "Home Location",
      spaceId: "13",
    });
    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "123") {
      return "5555";
    } else {
      return undefined;
    }
  }
}
