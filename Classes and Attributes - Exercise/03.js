function solve(tickets, orderBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static getTicket(input) {
            const [destination, price, status] = input.split('|');
            return new Ticket(destination, Number(price), status);
        }
    }

    const sorts = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status),
    };

    return tickets.map(Ticket.getTicket)
        .sort(sorts[orderBy]);
}