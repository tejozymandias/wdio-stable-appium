# Appium WebdriverIO Project

This project is set up to test iOS and Android apps using Appium and WebdriverIO (WDIO).

## Structure
- `/tests` — Place your test specs here
- `/config` — WDIO and Appium configuration files

## Scripts
- `npm test` — Runs the WDIO test runner

## Getting Started
1. Install dependencies: `npm install`
2. Configure your devices and apps in `/config/wdio.conf.js`
3. Add your test specs in `/tests`
4. Run tests with `npm test`

## Dependencies
- webdriverio
- @wdio/cli
- appium
- @wdio/appium-service
- @wdio/mocha-framework
- chai

## Notes
- This project is ready for both iOS and Android automation.
- See the WDIO and Appium docs for advanced configuration.
