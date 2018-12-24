





/** 
 * @param {org.kapy.payments.Registration} RegisterFarmerRecords
 * @transaction
*/
function Registration(RegisterFarmerRecords){
console.log(RegisterFarmerRecords);
 var factory = getFactory();
var newRegisterFarmerRecords = factory.newResource('org.kapy.payments','LandRecord',RegisterFarmerRecords.landrecord.eid);
newRegisterFarmerRecords =  RegisterFarmerRecords.landrecord;
  return getAssetRegistry('org.kapy.payments.LandRecord')
 .then(function(registry) {
   registry.add(newRegisterFarmerRecords)
  });
}
  
/**
* 
 * @param {org.kapy.payments.Verification} UpdateNurseryRecords 
 * @transaction
*/
 
 function Verification(UpdateNurseryRecords) {

   //udpate the asset after nursery response
   if (UpdateNurseryRecords.nursery.status = 'Approved') {
     UpdateNurseryRecords.landrecord.isFarmerRecApproved = true
   } else { 
     UpdateNurseryRecords.landrecord.isFarmerRecApproved = false
   }
   UpdateNurseryRecords.landrecord.ownerEntity  = UpdateNurseryRecords.nursery.ownerEntity;
  
   //get asset registry for land records, and update on the ledger
   return getAssetRegistry('org.kapy.payments.LandRecord')
     .then(function (assetRegistry) {
     return assetRegistry.update(UpdateNurseryRecords.landrecord);
   })                
} 
 
 /**
* 
 * @param {org.kapy.payments.Monitoring} UpdateGokRecords 
 * @transaction
*/
function Monitoring(UpdateGokRecords) {
 
   //udpate the asset after nursery response
 UpdateGokRecords.landrecord.inspectionCompletedForYear = UpdateGokRecords.gok.inspectionCompletedForYear;
 UpdateGokRecords.landrecord.NoSeedSurvForYear  = UpdateGokRecords.gok.NoSeedSurvForYear;
 UpdateGokRecords.landrecord.ownerEntity  = UpdateGokRecords.gok.ownerEntity;
                
    //get asset registry for land records, and update on the ledger
   return getAssetRegistry('org.kapy.payments.LandRecord')
    .then(function (assetRegistry) {
   return assetRegistry.update(UpdateGokRecords.landrecord);
  })                
}  
  
/**
* 
 * @param {org.kapy.payments.Disbursement} UpdateTreasuryRecords 
 * @transaction
*/
function Disbursement(UpdateTreasuryRecords) {
 
    //udpate the asset after nursery response
  UpdateTreasuryRecords.landrecord.AmountProcessed = UpdateTreasuryRecords.treasury.SeedlingPrice *     UpdateTreasuryRecords.landrecord.NoSeedSurvForYear ;
UpdateTreasuryRecords.landrecord.SeedlingPrice   = UpdateTreasuryRecords.treasury.SeedlingPrice;
UpdateTreasuryRecords.landrecord.ownerEntity    = UpdateTreasuryRecords.treasury.ownerEntity;
  
 //get asset registry for land records, and update on the ledger
 return getAssetRegistry('org.kapy.payments.LandRecord')
 .then(function (assetRegistry) {
 return assetRegistry.update(UpdateTreasuryRecords.landrecord);
 })                
}  
