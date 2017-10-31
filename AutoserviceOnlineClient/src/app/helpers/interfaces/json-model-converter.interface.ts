export interface JsonToModelConverterInterface<TModel, TJsonModel> {
    getModelFromJson: (jsonModel: TJsonModel) => TModel;
    getModelArrayFromJson: (jsonModelArray: TJsonModel[]) => TModel[];
    getJsonFromModel: (model: TModel) => TJsonModel;
    getJsonArrayFromModel: (modelArray: TModel[]) => TJsonModel[]
}
