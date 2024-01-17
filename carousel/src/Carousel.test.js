import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

//SMOKE TEST
it("loads without crashing", function(){
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


// expect the second image to move to first image on left arrow
it("works when you click on the left arrow", function() {
  const { container } = render (
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("should hide left arrow when on first image", function() {
  const { container } = render (
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeInTheDocument();
});



it("should hide right arrow when on last image", function() {
  const { container } = render (
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).not.toBeInTheDocument();
})

//SNAPSHOT TEST
it("matches snapshot", function(){
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  expect(container).toMatchSnapshot();
});