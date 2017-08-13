import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import OptionsScreen from './Components/OptionsScreen';
import HomeScreen from './Components/HomeScreen';

import styles from './Stylesheet'

var constructMessage = require('./Components/ResultScreen').constructmessage;
var ResultScreen = require('./Components/ResultScreen').resultscreen;
var getRandomIndex = require('./Components/ResultScreen').getrandomindex;


describe ("Tests App Without Crashing", () => {
  test("App renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
  });
});

describe("Test Individual Screen Components", () => {

  test("Test Options Screen renders correctly", () => {
    const optionsScreenTree = renderer.create(
      <OptionsScreen/>
    ).toJSON();
    expect(optionsScreenTree).toMatchSnapshot();
  });

  test("Home Screen renders correctly", () => {
    const homeScreenTree = renderer.create(
      <HomeScreen/>
    ).toJSON();
    expect(homeScreenTree).toMatchSnapshot();
  });

  test("Test Result Screen renders correctly", () => {
    const resultScreenTree = renderer.create(
      <ResultScreen/>
    ).toJSON();
    expect(resultScreenTree).toMatchSnapshot();
  });

});

describe("Result Screen Helper Methods", () => {

  test("Test Construct Message Length", () => {
    expect(constructMessage().length).toBe(20);
  });

  test("Test Construct Message Content", () => {
    expect(constructMessage()).toContain("It is certain");
    expect(constructMessage()).toContain("It is decidely so");
    expect(constructMessage()).toContain("Without a doubt");
    expect(constructMessage()).toContain("Yes definitely");
    expect(constructMessage()).toContain("You may rely on it");
    expect(constructMessage()).toContain("As I see it, yes");
    expect(constructMessage()).toContain("Most likely");
    expect(constructMessage()).toContain("Outlook good");
    expect(constructMessage()).toContain("Yes");
    expect(constructMessage()).toContain("Signs point to yes");
    expect(constructMessage()).toContain("Reply hazy try again");
    expect(constructMessage()).toContain("Ask again later");
    expect(constructMessage()).toContain("Better not tell you now");
    expect(constructMessage()).toContain("Cannot predict now");
    expect(constructMessage()).toContain("Concentrate and ask again");
    expect(constructMessage()).toContain("Don\"t count on it");
    expect(constructMessage()).toContain("My reply is no");
    expect(constructMessage()).toContain("My sources say no");
    expect(constructMessage()).toContain("Outlook not so good");
    expect(constructMessage()).toContain("Very doubtful");
  });

  test("Test Get Random Index", () => {
    expect(getRandomIndex()).toBeGreaterThanOrEqual(0);
    expect(getRandomIndex()).toBeLessThanOrEqual(19);
  });

});

describe("Test the contents of the Stylesheet", () => {

  test("Test the container properties", () => {
    expect(styles.container["flex"]).toBe(1);
    expect(styles.container["backgroundColor"]).toBe("#fff");
    expect(styles.container["alignItems"]).toBe("center");
    expect(styles.container["justifyContent"]).toBe("center");
  });

  test("Test the title properties", () => {
    expect(styles.title["flex"]).toBe(0.1);
    expect(styles.title["fontSize"]).toBe(35);
    expect(styles.title["textAlign"]).toBe("center");
    expect(styles.title["marginTop"]).toBe(30);
  });

  test("Test the optionsTitle properties", () => {
    expect(styles.optionsTitle["flex"]).toBe(0.3);
    expect(styles.optionsTitle["fontSize"]).toBe(35);
    expect(styles.optionsTitle["textAlign"]).toBe("center");
    expect(styles.optionsTitle["marginTop"]).toBe(35);
  });

  test("Test the button properties", () => {
    expect(styles.button["flex"]).toBe(1);
  });

  test("Test the listview properties", () => {
    expect(styles.listview["flex"]).toBe(1);
    expect(styles.listview["marginTop"]).toBe(25);
    expect(styles.listview["marginBottom"]).toBe(30);
  });

  test("Test the listitem properties", () => {
    expect(styles.listitem["flex"]).toBe(1);
    expect(styles.listitem["fontSize"]).toBe(25);
    expect(styles.listitem["textAlign"]).toBe("center");
  });

  test("Test the image properties", () => {
    expect(styles.image["width"]).toBe(250);
    expect(styles.image["height"]).toBe(250);
    expect(styles.image["alignItems"]).toBe("center");
  });

  test("Test the message properties", () => {
    expect(styles.message["flex"]).toBe(0.5);
    expect(styles.message["marginTop"]).toBe(100);
    expect(styles.message["fontSize"]).toBe(30);
    expect(styles.message["textAlign"]).toBe("center");
  });

});