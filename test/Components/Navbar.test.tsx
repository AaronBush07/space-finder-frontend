import { Navbar } from "../../src/components/Navbar";
import ReactDOM from "react-dom";
import { User } from "../../src/model/Model";
import { StaticRouter } from "react-router";
import { getByTestId } from '@testing-library/react'


describe("Navbar test suite", () => {
  let container: HTMLDivElement;

  const someUser: User = {
    userName: "someUser",
    email: "someEmail",
  };
  const baseLink = 'http://localhost'
  test("Renders correctly with user", () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Navbar user={someUser} />
      </StaticRouter>,
      container
    );

    const links = container.querySelectorAll('a');
    expect(links[0].href).toBe(baseLink + '/');
    expect(links[1].href).toBe(baseLink + '/profile');
    expect(links[2].href).toBe(baseLink + '/spaces');
    expect(links[3].href).toBe(baseLink + '/logout');
  });

  test("Renders correctly with user using data test", () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Navbar user={someUser} />
      </StaticRouter>,
      container
    );

    const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement
    expect(homeLink.href).toBe(baseLink + '/');

    const spacesLink = getByTestId(container, 'spaces-link') as HTMLAnchorElement
    expect(spacesLink.href).toBe(baseLink + '/spaces');
    const profileLink = getByTestId(container, 'profile-link') as HTMLAnchorElement
    expect(profileLink.href).toBe(baseLink + '/profile');

  });

  test("Renders correctly without user using data test", () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Navbar user={undefined} />
      </StaticRouter>,
      container
    );

    const loginLink = getByTestId(container, 'login-link') as HTMLAnchorElement
    expect(loginLink.href).toBe(baseLink + '/login');
  });
});
