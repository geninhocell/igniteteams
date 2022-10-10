import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group);

    const players: PlayerStorageDTO[] = storage.filter(
      (player) => player.team === team
    );

    return players;
  } catch (e) {
    throw e;
  }
}
