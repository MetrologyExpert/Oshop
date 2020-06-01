import { TestBed } from '@angular/core/testing';
import { ShoppingCartService } from './shopping-cart.service';
describe('ShoppingCartService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ShoppingCartService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shopping-cart.service.spec.js.map