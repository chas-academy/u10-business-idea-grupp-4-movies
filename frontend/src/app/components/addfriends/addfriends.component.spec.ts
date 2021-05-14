import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsers } from './addfriends.component';

describe('AllUsers', () => {
    let component: AllUsers;
    let fixture: ComponentFixture<AllUsers>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AllUsers],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AllUsers);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
