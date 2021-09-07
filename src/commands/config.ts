import { Command } from '@oclif/command'
import chalk from 'chalk'
import child_process from 'child_process'

export default class Config extends Command {
  static description = 'configures uclirc.yml';

  async run() {
    const editor = process.env.EDITOR || 'vi'
    const child = child_process.spawn(editor, ['.uclirc.yml'], {
      stdio: 'inherit',
    })

    child.on('exit', (error, code) => {
      this.log(chalk.green.inverse('Your upptime configured successfully!'))
    })
  }
}
