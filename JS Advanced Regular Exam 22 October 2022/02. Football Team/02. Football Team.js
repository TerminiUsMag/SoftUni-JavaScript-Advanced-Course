class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let returnPlayers = new Set();
        for (let player of footballPlayers) {
            let splittedInfo = player.split('/');
            let playerName = splittedInfo[0];
            let playerAge = splittedInfo[1];
            let playerValue = splittedInfo[2];
            returnPlayers.add(playerName);
            let invited = false;
            this.invitedPlayers.map(obj => {
                if (obj[0] === playerName) {
                    invited = true;
                    if (obj[2] < playerValue) {
                        obj[2] = playerValue;
                    }
                }
            })
            if (!invited) {
                this.invitedPlayers.push([playerName, playerAge, playerValue]);
            }

            if (this.invitedPlayers.length === 0) {
                this.invitedPlayers.push([playerName, playerAge, playerValue]);
            }



        }

        //"You successfully invite {name1}, {name2}, …{nameN}."
        return `You successfully invite ${Array.from(returnPlayers).join(', ')}.`
    }
    signContract(selectedPlayer) {
        let split = selectedPlayer.split('/');
        let playerName = split[0];
        let playerOffer = split[1];
        let playerInfoFromInvitedPlayersList = '';

        let invited = false;

        this.invitedPlayers.map(ip => {
            if (ip[0] === playerName) {
                invited = true;
                playerInfoFromInvitedPlayersList = ip;
            }
        });
        if (!invited)
            throw new Error(`${playerName} is not invited to the selection list!`);

        let recordedValue = playerInfoFromInvitedPlayersList[2];
        if (playerOffer < recordedValue)
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${Math.abs(recordedValue - playerOffer)} million more are needed to sign the contract!`);

        playerInfoFromInvitedPlayersList[2] = 'Bought';

        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
    }
    ageLimit(name, ageLimit) {
        let invited = false;
        let playerInfo = '';

        for (let player of this.invitedPlayers) {
            if (player[0] == name) {
                invited = true;
                playerInfo = player;
            }
        }

        if (!invited) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let playerName = playerInfo[0];
        let recordedAge = playerInfo[1];

        if (recordedAge < ageLimit) {
            let difference = Math.abs(ageLimit - recordedAge);
            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            }
            if (difference > 5)
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }

        return `${name} is above age limit!`;

    }
    transferWindowResult() {
        let list = 'Players list:';
        this.invitedPlayers.map(ip => {
            list = list.concat(`\nPlayer ${ip[0]}-${ip[2]}`);
        })

        return list;
    }
}

//let team = new footballTeam("Barcelona", 'Bulgaria');
//console.log(team.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/120"]));
//console.log(team.signContract('Pau Torres/53'));
//console.log(team.ageLimit('Lionel Messi','39'));

//let fTeam = new footballTeam("Barcelona", "Spain");
//console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
//console.log(fTeam.signContract("Kylian Mbappé/240"));
//console.log(fTeam.ageLimit("Kylian Mbappé", 30));
//console.log(fTeam.transferWindowResult());

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


