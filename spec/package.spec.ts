/// <reference path="../lib/typings/index" />

import {expect} from "chai"
import {join} from "path"

const Package = join(__dirname, "..")

describe("atom-typescript", function() {
  it("should activate", async () => {
    const packages: any = atom.packages

    // Load package, but it won't activate until the Typescript grammar is used
    const promise = atom.packages.activatePackage(Package)

    packages.triggerActivationHook("atom-typescript:grammar-used")
    packages.triggerDeferredActivationHooks()

    await promise

    expect(atom.packages.isPackageActive("atom-typescript")).to.equal(true)
  })
})
