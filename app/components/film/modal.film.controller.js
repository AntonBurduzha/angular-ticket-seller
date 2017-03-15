export class ModalDemoController {
  constructor($uibModal, $document) {
    this.$uibModal = $uibModal;
    this.$document = $document;
    this.animationsEnabled = true;
  }

  open(size, parentSelector) {
    let parentElem = parentSelector ?
      angular.element(this.$document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    let modalInstance = this.$uibModal.open({
      animation: this.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: `<div class="modal-header">
                    <h3 class="modal-title">Do you wanna buy ticket?</h3>
                 </div>
                 <div class="modal-footer">
                    <button class="btn btn-primary" type="button" ng-click="vm.ok()">OK</button> 
                    <button class="btn btn-primary" type="button" ng-click="vm.cancel()">Cancel</button>
                 </div>`,
      controller: 'ModalInstanceController',
      controllerAs: 'vm',
      size: size,
      appendTo: parentElem
    });

    modalInstance.result.then(result => {
      if(result === 'yes'){
        let modalInstance = this.$uibModal.open({
          animation: this.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          template: `<div class="modal-header">
                        <h3 class="modal-title">Thanks</h3>
                     </div>
                     <div class="modal-footer">
                        <button class="btn btn-primary" type="button" ng-click="vm.cancel()">OK</button>
                      </div>`,
          controller: 'ModalInstanceController',
          controllerAs: 'vm',
          size: size,
          appendTo: parentElem
        });
        modalInstance.result;
      }
    });
  };
}


export class ModalInstanceController {
  constructor($uibModalInstance){
    this.$uibModalInstance = $uibModalInstance;
    this.checkResult = {
      yes: 'yes',
      no: 'no'
    };
  }

  ok() {
    this.$uibModalInstance.close(this.checkResult.yes);
  };

  cancel() {
    this.$uibModalInstance.close(this.checkResult.no);
  };
}

