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
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceController',
      controllerAs: 'vm',
      size: size,
      appendTo: parentElem
    });

    modalInstance.result.then(selectedItem => {
      this.selected = selectedItem;
    });
  };
}


export class ModalInstanceController {
  constructor($uibModalInstance){
    this.$uibModalInstance = $uibModalInstance;
    this.selected = {
      yes: 'Yes',
      no: 'No'
    };
  }

  ok() {
    this.$uibModalInstance.close(this.selected.yes);
  };

  cancel() {
    this.$uibModalInstance.close(this.selected.no);
  };
}

