export interface JsonToModelConverterInterface<T> {
    getModelFromJson: (json: any) => T;
    getModelArrayFromJson: (json: any) => T[];
}
