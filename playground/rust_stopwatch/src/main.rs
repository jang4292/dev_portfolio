mod stopwatch;

use std::time::{Duration, Instant};

use eframe::egui;
use stopwatch::Stopwatch;

#[derive(Default)]
struct StopwatchApp {
    stopwatch: Stopwatch,
}

impl eframe::App for StopwatchApp {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        egui::CentralPanel::default().show(ctx, |ui| {
            ui.vertical_centered(|ui| {
                ui.add_space(24.0);
                ui.heading("Stopwatch");
                ui.add_space(16.0);

                let elapsed = self.stopwatch.elapsed_at(Instant::now());
                ui.label(egui::RichText::new(format_elapsed(elapsed)).size(40.0));
                ui.add_space(16.0);

                let running = self.stopwatch.is_running();
                ui.horizontal(|ui| {
                    if ui
                        .add_enabled(!running, egui::Button::new("Start / Resume"))
                        .clicked()
                    {
                        self.stopwatch.start_at(Instant::now());
                    }
                    if ui
                        .add_enabled(running, egui::Button::new("Pause"))
                        .clicked()
                    {
                        self.stopwatch.pause_at(Instant::now());
                    }
                    if ui.button("Reset").clicked() {
                        self.stopwatch.reset();
                    }
                });
            });
        });

        // 시간이 변하는 동안만 다음 화면 갱신을 예약합니다.
        if self.stopwatch.is_running() {
            ctx.request_repaint_after(Duration::from_millis(16));
        }
    }
}

fn format_elapsed(elapsed: Duration) -> String {
    // 전체 밀리초를 각 시간 단위로 나누고 나머지를 구합니다.
    let total_millis = elapsed.as_millis();
    let hours = total_millis / 3_600_000;
    let minutes = (total_millis / 60_000) % 60;
    let seconds = (total_millis / 1_000) % 60;
    let millis = total_millis % 1_000;

    format!("{hours:02}:{minutes:02}:{seconds:02}.{millis:03}")
}

fn main() -> eframe::Result<()> {
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default().with_inner_size([440.0, 220.0]),
        ..Default::default()
    };

    eframe::run_native(
        "Rust Stopwatch",
        options,
        Box::new(|_creation_context| Ok(Box::<StopwatchApp>::default())),
    )
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn formats_elapsed_time_without_wrapping_hours() {
        assert_eq!(format_elapsed(Duration::ZERO), "00:00:00.000");
        assert_eq!(
            format_elapsed(Duration::from_millis(3_723_045)),
            "01:02:03.045"
        );
        assert_eq!(
            format_elapsed(Duration::from_secs(100 * 3_600)),
            "100:00:00.000"
        );
    }
}
