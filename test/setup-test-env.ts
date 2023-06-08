import { installGlobals } from "@remix-run/node";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import jest_dom_matchers from "@testing-library/jest-dom/matchers";
import * as vitest_axe_matchers from "vitest-axe/matchers";
import { expect } from "vitest";

expect.extend(jest_dom_matchers);
expect.extend(vitest_axe_matchers);
installGlobals();

// testing library will use the data-qa attr when we call *TestId methods
configure({ testIdAttribute: "data-qa" });
