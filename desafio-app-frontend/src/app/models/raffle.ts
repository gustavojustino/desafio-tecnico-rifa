export class Raffle {
  number!: number;
  purchased!: boolean;
  user!: string
  data!: Date;

  constructor(number: number, purchased: boolean, user: string, data: Date) {
    this.number = number;
    this.purchased = purchased;
    this.user = user;
    this.data = data;
  }
}
