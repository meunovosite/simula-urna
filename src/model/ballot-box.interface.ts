/* eslint-disable no-unused-vars */

/**
 * @description vote order
 * @step 1 - VEREADOR
 * @step 2 - PREFEITO
 */
export const IPositions = {
    VEREADOR: 'VEREADOR',
    PREFEITO: 'PREFEITO',
};

export const IQuantityNumbers = {
    VEREADOR: 5,
    PREFEITO: 2,
};

export type IPosition = keyof typeof IPositions;

export interface ICandidate {
	name: string;
	number: string;
    position: IPosition;
    image: string;
    group: string;
}

export interface IVote {
	candidate: Partial<ICandidate> & Pick<ICandidate, 'position'>;
	isWhite: boolean;
}

export interface IBallotBox {
	get quantityOfNumbers(): number;
	get step(): IPosition;
    get votes(): Array<IVote>;
	confirm(vote: IVote): IBallotBox;
    clear(): IBallotBox;
    getNextStep(): IPosition;
    getCandidateByNumber(number: string): ICandidate;
    hasNextStep(): boolean;
    alreadyVoteForPosition(position: IPosition): boolean;
}

export default IBallotBox;
