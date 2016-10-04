import { expect } from 'chai';
import * as control from 'form-builder/actions/control';

describe('control', () => {
  describe('selectControl', () => {
    it('should return the selected control id', () => {
      const action = control.selectControl(1);
      expect(action.type).to.be.eql('SELECT_CONTROL');
      expect(action.id).to.be.eql(1);
    });
  });

  describe('selectSource', () => {
    it('should return the selected control id', () => {
      const concept = {
        name: 'Pulse',
        uuid: 'someUuid',
      };
      const action = control.selectSource(concept, 1);
      expect(action.type).to.be.eql('SELECT_SOURCE');
      expect(action.id).to.be.eql(1);
      expect(action.concept).to.be.eql(concept);
    });
  });

  describe('deselectControl', () => {
    it('should return appropriate type', () => {
      const action = control.deselectControl();
      expect(action).to.be.eql({ type: 'DESELECT_CONTROL' });
    });
  });

  describe('removeSourceMap', () => {
    it('should return appropriate type', () => {
      const action = control.removeSourceMap();
      expect(action).to.be.eql({ type: 'REMOVE_SOURCE_MAP' });
    });
  });
});