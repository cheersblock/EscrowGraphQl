import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AssetData } from "../generated/schema"
import { AssetData as AssetDataEvent } from "../generated/GalileoEscrow/GalileoEscrow"
import { handleAssetData } from "../src/galileo-escrow"
import { createAssetDataEvent } from "./galileo-escrow-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let collectionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let assetPrice = BigInt.fromI32(234)
    let platformPrice = BigInt.fromI32(234)
    let shipmentFees = BigInt.fromI32(234)
    let tax = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newAssetDataEvent = createAssetDataEvent(
      collectionAddress,
      tokenId,
      assetPrice,
      platformPrice,
      shipmentFees,
      tax,
      timestamp
    )
    handleAssetData(newAssetDataEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AssetData created and stored", () => {
    assert.entityCount("AssetData", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collectionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetPrice",
      "234"
    )
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "platformPrice",
      "234"
    )
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "shipmentFees",
      "234"
    )
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tax",
      "234"
    )
    assert.fieldEquals(
      "AssetData",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
