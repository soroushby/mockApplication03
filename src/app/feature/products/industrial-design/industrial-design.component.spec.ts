import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IndustrialDesignComponent } from "./industrial-design.component";

describe("IndustrialDesignComponent", () => {
    let component: IndustrialDesignComponent;
    let fixture: ComponentFixture<IndustrialDesignComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IndustrialDesignComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IndustrialDesignComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
