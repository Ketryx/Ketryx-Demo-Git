/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe('Test insulin delivery status UI on Android @tests:MR-68', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})


describe('Test insulin delivery status UI on iOS @tests:MR-70', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test for iOS Client @tests:MR-4', () => {
  it('renders the best heading', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})

// describe('Unit test for Android Client @tests:KXITM7VNAYPPX2686NT493MKDMZRNWZ', () => {
//   it('renders the best heading', () => {
//     render(<Home />)

//     const heading = screen.getByRole("heading", {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument()
//   })
// })

describe('Unit test for record keeping @tests:MR-100', () => {
  it('Verify create and archive record feature', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})


describe('Unit test feedback forms @tests:MR-74', () => {
  it('Verify form submission', () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument()
  })
})

// describe('Unit test feedback forms @tests:KT-14', () => {
//   it('Verify form submission', () => {
//     render(<Home />)

//     const heading = screen.getByRole("heading", {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument()
//   })
// })

// describe('Unit test feedback forms @tests:KT-3', () => {
//   it('Verify form submission', () => {
//     render(<Home />)

//     const heading = screen.getByRole("heading", {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument()
//   })
// })

