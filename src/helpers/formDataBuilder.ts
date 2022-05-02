export class FormDataBuilder {
    private readonly _formData: FormData;


    constructor() {
        this._formData = new FormData();
    }

    with(key: string, value: string | File): FormDataBuilder {
        this._formData.append(key, value);

        return this;
    }

    withMultiple(key: string, values: string[] | File[]): FormDataBuilder {
        values.forEach(value => this._formData.append(key, value));

        return this;
    }

    build(): FormData {
        return this._formData;
    }
}