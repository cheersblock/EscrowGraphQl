import {
  AssetData as AssetDataEvent,
  CancelDispute as CancelDisputeEvent,
  ClaimDispute as ClaimDisputeEvent,
  MakeDecision as MakeDecisionEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  WithdrawFunds as WithdrawFundsEvent
} from "../generated/GalileoEscrow/GalileoEscrow"
import {
  AssetData,
  CancelDispute,
  ClaimDispute,
  MakeDecision,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  WithdrawFunds
} from "../generated/schema"

export function handleAssetData(event: AssetDataEvent): void {
  let entity = new AssetData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.assetPrice = event.params.assetPrice
  entity.platformPrice = event.params.platformPrice
  entity.shipmentFees = event.params.shipmentFees
  entity.tax = event.params.tax
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelDispute(event: CancelDisputeEvent): void {
  let entity = new CancelDispute(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimDispute(event: ClaimDisputeEvent): void {
  let entity = new ClaimDispute(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.price = event.params.price
  entity.timeStamp = event.params.timeStamp
  entity.disputeMessageByUser = event.params.disputeMessageByUser

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMakeDecision(event: MakeDecisionEvent): void {
  let entity = new MakeDecision(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.transferAssetOwnership = event.params.transferAssetOwnership
  entity.tokenId = event.params.tokenId
  entity.amountToUser = event.params.amountToUser
  entity.amountToSeller = event.params.amountToSeller
  entity.decisionRemarksByPlatform = event.params.decisionRemarksByPlatform

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawFunds(event: WithdrawFundsEvent): void {
  let entity = new WithdrawFunds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddresses = event.params.tokenAddresses
  entity.tokenAmounts = event.params.tokenAmounts
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
