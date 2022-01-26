const defaultDataset = {
  "init": {
      "answers": [
          {"content": "�d�����˗�������", "nextId": "job_offer"},
          {"content": "�G���W�j�A�̃L�����A�ɂ��đ��k������", "nextId": "consultant"},
          {"content": "�w�K�R�~���j�e�B�ɂ��Ēm�肽��", "nextId": "community"},
          {"content": "���t������������", "nextId": "dating"}
      ],
      "question": "����ɂ��́I?�g���n�b�N�ւ̂��p���͂Ȃ�ł��傤���H"
  },
  "job_offer": {
      "answers": [
          {"content": "Web�T�C�g�𐧍삵�Ăق���", "nextId": "website"},
          {"content": "Web�A�v�����J�����Ăق���", "nextId": "webapp"},
          {"content": "�������c�[��������Ăق���", "nextId": "automation_tool"},
          {"content": "���̑�", "nextId": "other_jobs"}
      ],
      "question": "�ǂ̂悤�Ȃ��d���ł��傤���H"
  },
  "website": {
      "answers": [
          {"content": "�₢���킹��", "nextId": "contact"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "Web�T�C�g�׍�ɂ��Ăł��ˁB�R�`�����炨�₢���킹�ł��܂��B"
  },
  "webapp": {
      "answers": [
          {"content": "�₢���킹��", "nextId": "contact"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "Web�A�v���J���ɂ��Ăł��ˁB�R�`�����炨�₢���킹�ł��܂��B"
  },
  "automation_tool": {
      "answers": [
          {"content": "�₢���킹��", "nextId": "contact"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "�������c�[���J���ɂ��Ăł��ˁB�R�`�����炨�₢���킹�ł��܂��B"
  },
  "other_jobs": {
      "answers": [
          {"content": "�₢���킹��", "nextId": "contact"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "���̑��ɂ��Ăł��ˁB�R�`�����炨�₢���킹�ł��܂��B"
  },
  "consultant": {
      "answers": [
          {"content": "YouTube�œ��������", "nextId": "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w"},
          {"content": "�w�K�R�~���j�e�B�ɂ��Ēm�肽��", "nextId": "community"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "�g���n�b�N�͕��i����YouTube�ŃL�����A�ɂ��Ĕ��M���Ă��܂��B�܂��A�l���^�c����G���W�j�A�����w�K�R�~���j�e�B���ł����k�ɏ���Ă��܂���B"
  },
  "community": {
      "answers": [
          {"content": "�ǂ�Ȋ��������Ă���́H", "nextId": "community_activity"},
          {"content": "�R�~���j�e�B�ɎQ��������", "nextId": "https://torahack.web.app/community/"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "2020�N3������w�K�R�~���j�e�B���n�߂܂����I?Web�G���W�j�A�ւ̓]�E��ڎw���l�����ɁA�v���O���~���O����������L�����A�̑��k�ɏ���Ă��܂��B"
  },
  "community_activity": {
      "answers": [
          {"content": "����ɏڍׂ�m�肽��", "nextId": "https://youtu.be/tIzE7hUDbBM"},
          {"content": "�R�~���j�e�B�ɎQ��������", "nextId": "https://torahack.web.app/community/"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "�t�����g�G���h�����̋��ނ̒񋟁A�L�����A��׋��@�Ɋւ��郁���}�K�̔z�M�A�T1�̃I�����C����Ɖ�Ȃǂ��J�Â��Ă��܂��I\n�ڍׂ�YouTube����ŏЉ�Ă��܂��B"
  },
  "dating": {
      "answers": [
          {"content": "DM����", "nextId": "https://twitter.com/torahack_"},
          {"content": "�ŏ��̎���ɖ߂�", "nextId": "init"}
      ],
      "question": "�܂��͈ꏏ�Ƀ����`�ł��������ł����HDM���Ă�������?"
  }
}

export default defaultDataset