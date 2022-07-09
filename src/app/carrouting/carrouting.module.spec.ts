import { CarroutingModule } from './carrouting.module';

describe('CarroutingModule', () => {
  let carroutingModule: CarroutingModule;

  beforeEach(() => {
    carroutingModule = new CarroutingModule();
  });

  it('should create an instance', () => {
    expect(carroutingModule).toBeTruthy();
  });
});
