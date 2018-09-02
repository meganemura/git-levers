import {Command, flags} from '@oclif/command'
import {execSync} from 'child_process'

export default class Runcom extends Command {
  static description = 'Run command and commit generated files'

  async run() {
    const command = this.argv.join(' ')
    console.log(`$ ${command}`)
    execSync(command)
    execSync('git add .')
    execSync(`git commit -m'$ ${command}'`)
  }
}
