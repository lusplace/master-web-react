import "@testing-library/jest-dom"
import { beforeAll, afterAll, afterEach } from '@jest/globals';

beforeAll(() => console.log("Starting Tests..."));
afterEach(() => console.log("Cleaning Tests..."))
afterAll(() => console.log("Finishing Tests..."))