import {OptionModel} from './option.model';

export class QuestionModel {

	public Question : string;
	public Options :  OptionModel;
	public Answer : number;
	public Round : number;
	public optionCategory : string;
	public priceMoney : number;
}