export class ModalThanksDemoController {
  constructor($uibModal, $document) {
    this.$uibModal = $uibModal;
    this.$document = $document;
    this.animationsEnabled = true;
  }

  openThanksModal(size, parentSelector) {
    let parentElem = parentSelector ?
      angular.element(this.$document[0].querySelector('.modal-demo-thanks' + parentSelector)) : undefined;

    let modalInstance = this.$uibModal.open({
      animation: this.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalThankInstanceController',
      controllerAs: 'vm',
      size: size,
      appendTo: parentElem
    });

    modalInstance.result;
  };
}


export class ModalThanksInstanceController {
  constructor($uibModalInstance){
    this.$uibModalInstance = $uibModalInstance;
  }

  ok() {
    this.$uibModalInstance.close();
    //console.log('Aye');
  };
}

