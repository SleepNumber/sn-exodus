import { describe, test } from 'vitest';
import hub from '~/util/core/hub';

describe('hub', () => {
  test('should resolve promise when someone subscribes', async () => {
    const timeout = 5000;

    const onListener = hub.onTopicListener(hub.topics.USER);
    hub.sub(hub.topics.USER);

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Test timed out!')), timeout);
    });

    await Promise.race([onListener, timeoutPromise]);
  });
});
