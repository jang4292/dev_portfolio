use std::time::{Duration, Instant};

// 누적된 이전 구간과 현재 구간의 시작 시각을 따로 보관합니다.
#[derive(Default)]
pub struct Stopwatch {
    accumulated: Duration,
    // Some이면 측정 중이고, None이면 시작 전 또는 일시정지 상태입니다.
    started_at: Option<Instant>,
}

impl Stopwatch {
    pub fn is_running(&self) -> bool {
        self.started_at.is_some()
    }

    pub fn start_at(&mut self, now: Instant) {
        if self.started_at.is_none() {
            self.started_at = Some(now);
        }
    }

    pub fn pause_at(&mut self, now: Instant) {
        // take()는 시작 시각을 꺼내면서 필드를 None으로 바꿉니다.
        if let Some(started_at) = self.started_at.take() {
            self.accumulated += now.duration_since(started_at);
        }
    }

    pub fn reset(&mut self) {
        self.accumulated = Duration::ZERO;
        self.started_at = None;
    }

    pub fn elapsed_at(&self, now: Instant) -> Duration {
        // 현재 측정 중인 구간은 누적값을 변경하지 않고 표시할 때만 더합니다.
        match self.started_at {
            Some(started_at) => self.accumulated + now.duration_since(started_at),
            None => self.accumulated,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn pause_and_resume_accumulate_only_running_time() {
        let base = Instant::now();
        let mut stopwatch = Stopwatch::default();
        stopwatch.start_at(base);
        assert_eq!(
            stopwatch.elapsed_at(base + Duration::from_secs(2)),
            Duration::from_secs(2)
        );

        stopwatch.pause_at(base + Duration::from_secs(3));
        assert!(!stopwatch.is_running());
        assert_eq!(
            stopwatch.elapsed_at(base + Duration::from_secs(10)),
            Duration::from_secs(3)
        );

        stopwatch.start_at(base + Duration::from_secs(10));
        assert_eq!(
            stopwatch.elapsed_at(base + Duration::from_secs(12)),
            Duration::from_secs(5)
        );
    }

    #[test]
    fn repeated_start_and_pause_do_not_change_the_result() {
        let base = Instant::now();
        let mut stopwatch = Stopwatch::default();
        stopwatch.pause_at(base);
        stopwatch.start_at(base);
        stopwatch.start_at(base + Duration::from_secs(1));
        stopwatch.pause_at(base + Duration::from_secs(2));
        stopwatch.pause_at(base + Duration::from_secs(3));
        assert_eq!(
            stopwatch.elapsed_at(base + Duration::from_secs(4)),
            Duration::from_secs(2)
        );
    }

    #[test]
    fn reset_stops_and_clears_the_stopwatch() {
        let base = Instant::now();
        let mut stopwatch = Stopwatch::default();
        stopwatch.start_at(base);
        stopwatch.pause_at(base + Duration::from_secs(1));
        stopwatch.start_at(base + Duration::from_secs(2));
        stopwatch.reset();
        assert!(!stopwatch.is_running());
        assert_eq!(
            stopwatch.elapsed_at(base + Duration::from_secs(3)),
            Duration::ZERO
        );
    }
}
