import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AssetData,
  CancelDispute,
  ClaimDispute,
  MakeDecision,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  WithdrawFunds
} from "../generated/GalileoEscrow/GalileoEscrow"

export function createAssetDataEvent(
  collectionAddress: Address,
  tokenId: BigInt,
  assetPrice: BigInt,
  platformPrice: BigInt,
  shipmentFees: BigInt,
  tax: BigInt,
  timestamp: BigInt
): AssetData {
  let assetDataEvent = changetype<AssetData>(newMockEvent())

  assetDataEvent.parameters = new Array()

  assetDataEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  assetDataEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  assetDataEvent.parameters.push(
    new ethereum.EventParam(
      "assetPrice",
      ethereum.Value.fromUnsignedBigInt(assetPrice)
    )
  )
  assetDataEvent.parameters.push(
    new ethereum.EventParam(
      "platformPrice",
      ethereum.Value.fromUnsignedBigInt(platformPrice)
    )
  )
  assetDataEvent.parameters.push(
    new ethereum.EventParam(
      "shipmentFees",
      ethereum.Value.fromUnsignedBigInt(shipmentFees)
    )
  )
  assetDataEvent.parameters.push(
    new ethereum.EventParam("tax", ethereum.Value.fromUnsignedBigInt(tax))
  )
  assetDataEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return assetDataEvent
}

export function createCancelDisputeEvent(
  collectionAddress: Address,
  tokenId: BigInt
): CancelDispute {
  let cancelDisputeEvent = changetype<CancelDispute>(newMockEvent())

  cancelDisputeEvent.parameters = new Array()

  cancelDisputeEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  cancelDisputeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return cancelDisputeEvent
}

export function createClaimDisputeEvent(
  price: BigInt,
  timeStamp: BigInt,
  disputeMessageByUser: string
): ClaimDispute {
  let claimDisputeEvent = changetype<ClaimDispute>(newMockEvent())

  claimDisputeEvent.parameters = new Array()

  claimDisputeEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  claimDisputeEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )
  claimDisputeEvent.parameters.push(
    new ethereum.EventParam(
      "disputeMessageByUser",
      ethereum.Value.fromString(disputeMessageByUser)
    )
  )

  return claimDisputeEvent
}

export function createMakeDecisionEvent(
  collectionAddress: Address,
  transferAssetOwnership: Address,
  tokenId: BigInt,
  amountToUser: BigInt,
  amountToSeller: BigInt,
  decisionRemarksByPlatform: string
): MakeDecision {
  let makeDecisionEvent = changetype<MakeDecision>(newMockEvent())

  makeDecisionEvent.parameters = new Array()

  makeDecisionEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  makeDecisionEvent.parameters.push(
    new ethereum.EventParam(
      "transferAssetOwnership",
      ethereum.Value.fromAddress(transferAssetOwnership)
    )
  )
  makeDecisionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  makeDecisionEvent.parameters.push(
    new ethereum.EventParam(
      "amountToUser",
      ethereum.Value.fromUnsignedBigInt(amountToUser)
    )
  )
  makeDecisionEvent.parameters.push(
    new ethereum.EventParam(
      "amountToSeller",
      ethereum.Value.fromUnsignedBigInt(amountToSeller)
    )
  )
  makeDecisionEvent.parameters.push(
    new ethereum.EventParam(
      "decisionRemarksByPlatform",
      ethereum.Value.fromString(decisionRemarksByPlatform)
    )
  )

  return makeDecisionEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createWithdrawFundsEvent(
  tokenAddresses: Array<Address>,
  tokenAmounts: Array<BigInt>,
  recipient: Address
): WithdrawFunds {
  let withdrawFundsEvent = changetype<WithdrawFunds>(newMockEvent())

  withdrawFundsEvent.parameters = new Array()

  withdrawFundsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddresses",
      ethereum.Value.fromAddressArray(tokenAddresses)
    )
  )
  withdrawFundsEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmounts",
      ethereum.Value.fromUnsignedBigIntArray(tokenAmounts)
    )
  )
  withdrawFundsEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return withdrawFundsEvent
}
