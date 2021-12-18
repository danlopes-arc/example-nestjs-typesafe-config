import { parseEnv } from './parse-env';
import * as classTransformer from 'class-transformer';
import * as classValidator from 'class-validator';

jest.mock('./env');
jest.mock('class-transformer');
jest.mock('class-validator');

const classTransformerMock = classTransformer as jest.Mocked<typeof classTransformer>;
const classValidatorMock = classValidator as jest.Mocked<typeof classValidator>;

describe('parseEnv', () => {
  it('returns instance from class-transformer', () => {
    const plainToInstanceResult = {};

    classTransformerMock.plainToInstance.mockReturnValueOnce(plainToInstanceResult);
    classValidatorMock.validateSync.mockReturnValueOnce([]);

    const parsed = parseEnv({});

    expect(parsed).toBe(plainToInstanceResult);
  });

  it('uses class-transformer with propper options', () => {
    classValidatorMock.validateSync.mockReturnValueOnce([]);

    parseEnv({});

    const transformerOptionsArgument = classTransformerMock.plainToInstance.mock.calls[0][2];

    expect(transformerOptionsArgument).toEqual({
      enableImplicitConversion: true,
    });
  });

  it('validates transformed instance', () => {
    const plaintoInstanceResult = {};

    classTransformerMock.plainToInstance.mockReturnValueOnce(plaintoInstanceResult);
    classValidatorMock.validateSync.mockReturnValueOnce([]);

    parseEnv({});

    expect(classValidatorMock.validateSync).toHaveBeenCalledWith(plaintoInstanceResult);
  });

  it('throws when validate fails', () => {
    const ValidationError =
      jest.requireActual<typeof classValidator>('class-validator').ValidationError;

    const validationError = Object.assign(new ValidationError(), {
      property: 'prop',
    });

    classValidatorMock.validateSync.mockReturnValueOnce([validationError]);

    expect(() => parseEnv({})).toThrow([validationError].toString());
  });
});
