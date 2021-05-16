import renderer from "react-test-renderer";
import SearchInput from "../components/SearchInput";

describe("SearchInput", () => {
  it("should display search input", () => {
    const tree = renderer.create(<SearchInput />).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
